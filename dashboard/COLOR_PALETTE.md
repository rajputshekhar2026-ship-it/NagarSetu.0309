# NagarSetu Admin — Color Palette Reference
> Aligned with NagarSetu Android App (`Color.kt`)

## CSS Variables

### Brand Colors
| Variable         | Hex       | Usage                              |
|------------------|-----------|------------------------------------|
| `--navy`         | `#1A1A3E` | DeepIndigo — sidebar, header bg    |
| `--civic`        | `#2D468C` | PrimaryBlue — buttons, links       |
| `--electric`     | `#00D4FF` | ElectricBlue — dark mode accents   |
| `--sos-orange`   | `#F97316` | Bright Orange — SOS (spec)         |
| `--sos-red`      | `#E53935` | SosRed — critical/danger           |
| `--emerald`      | `#2ECC71` | EmeraldGreen — success/online      |
| `--amber`        | `#F57F17` | WarnAmber — warnings               |

### Light Mode Surfaces
| Variable    | Hex / Value               | Usage                  |
|-------------|---------------------------|------------------------|
| `--bg`      | `#F0F4FB`                 | Page background        |
| `--surface` | `#FFFFFF`                 | Cards / modals         |
| `--s2`      | `#F5F7FC`                 | Table rows / inputs    |
| `--s3`      | `#EBF0FA`                 | Progress track / scrollbar |
| `--text`    | `#1A1A3E`                 | Primary text           |
| `--t2`      | `#5A6480`                 | Secondary / labels     |
| `--hdr`     | `linear-gradient(135deg, #1A237E, #2D468C)` | Header gradient |

### Dark Mode Surfaces
| Variable    | Value      |
|-------------|------------|
| `--bg`      | `#080818`  |
| `--surface` | `#131328`  |
| `--s2`      | `#1C1C38`  |
| `--s3`      | `#242448`  |
| `--text`    | `#E8E8FF`  |
| `--t2`      | `#8888AA`  |

## Android → Web Mapping
| Android token         | Web CSS variable   |
|-----------------------|--------------------|
| `DeepIndigo`          | `--navy` / `--sb`  |
| `PrimaryBlue`         | `--civic`          |
| `ElectricBlue`        | `--electric`       |
| `SosOrange` (spec)    | `--sos-orange`     |
| `SosRed`              | `--sos-red`        |
| `EmeraldGreen`        | `--emerald`        |
| `WarnAmber`           | `--amber`          |
| `MintBackground`      | `--bg` (light)     |
