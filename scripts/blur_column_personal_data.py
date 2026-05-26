"""
コラム画像の身長・体重入力欄を加工して個人が特定されないようにする。

使い方: python scripts/blur_column_personal_data.py
"""
from pathlib import Path
import shutil

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "src" / "assets" / "eiyo-app"
SOURCES = {
    "app-input.jpg": "docs/eiyo-apli-report/25NB026_1_1_スクリーンショット_19-5-2026_113150_htmlrun.ai.jpeg",
    "student-app-design.jpg": "docs/eiyo-apli-report/25NB014_1_1_20260519_115546.jpg",
    "students-coding.jpg": "docs/eiyo-apli-report/25NB060_1_1_IMG_7157.jpeg",
}

FILL = (235, 228, 218)  # 入力欄に近いベージュ
PADDING = 10


def obscure_box(img: Image.Image, box: tuple[int, int, int, int]) -> None:
    x0, y0, x1, y1 = box
    w, h = img.size
    x0 = max(0, x0 - PADDING)
    y0 = max(0, y0 - PADDING)
    x1 = min(w, x1 + PADDING)
    y1 = min(h, y1 + PADDING)
    if x1 <= x0 or y1 <= y0:
        return
    region = img.crop((x0, y0, x1, y1))
    region = region.filter(ImageFilter.GaussianBlur(radius=30))
    overlay = Image.new("RGB", region.size, FILL)
    region = Image.blend(region, overlay, alpha=0.75)
    img.paste(region, (x0, y0))
    draw = ImageDraw.Draw(img)
    draw.rectangle((x0, y0, x1, y1), outline=(200, 190, 175), width=1)


def box_from_fractions(
    size: tuple[int, int],
    regions: list[tuple[float, float, float, float]],
) -> list[tuple[int, int, int, int]]:
    w, h = size
    return [
        (int(a * w), int(b * h), int(c * w), int(d * h))
        for a, b, c, d in regions
    ]


def save_jpg(path: Path, img: Image.Image) -> None:
    img.save(path, quality=88, optimize=True)


def process_app_input(path: Path) -> None:
    img = Image.open(path).convert("RGB")
    for box in box_from_fractions(
        img.size,
        [
            (0.48, 0.38, 0.72, 0.52),  # 身長（右列・上段）
            (0.20, 0.54, 0.38, 0.68),  # 体重（左列・下段）
        ],
    ):
        obscure_box(img, box)
    save_jpg(path, img)
    print(f"Updated: {path.name}")


def process_student_app_design(path: Path) -> None:
    """横向き撮影 → 正立してから加工（コラム表示も見やすく）"""
    img = Image.open(path).convert("RGB").rotate(-90, expand=True)
    for box in box_from_fractions(
        img.size,
        [
            (0.50, 0.47, 0.86, 0.56),  # 身長
            (0.06, 0.53, 0.42, 0.62),  # 体重
        ],
    ):
        obscure_box(img, box)
    save_jpg(path, img)
    print(f"Updated (upright): {path.name} {img.size}")


def process_students_coding(path: Path) -> None:
    img = Image.open(path).convert("RGB").rotate(-90, expand=True)
    for box in box_from_fractions(
        img.size,
        [
            (0.08, 0.52, 0.37, 0.59),  # 身長（左列・下段）
            (0.49, 0.52, 0.80, 0.59),  # 体重（右列・下段）
        ],
    ):
        obscure_box(img, box)
    save_jpg(path, img)
    print(f"Updated (upright): {path.name} {img.size}")


def main() -> None:
    for dest, src in SOURCES.items():
        shutil.copy2(ROOT / src, ASSETS / dest)

    process_app_input(ASSETS / "app-input.jpg")
    process_student_app_design(ASSETS / "student-app-design.jpg")
    process_students_coding(ASSETS / "students-coding.jpg")


if __name__ == "__main__":
    main()
