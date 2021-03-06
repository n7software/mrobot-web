import { MatIconRegistry } from "@angular/material"
import { DomSanitizer } from "@angular/platform-browser"

export const icons = {
  eureka: "assets/eureka.svg",
  "mrobot-full": "assets/mrobot-full.svg",
  mrobot: "assets/mrobot.svg",
  games: "assets/games.svg",
  "civ-v": "assets/civ-v.svg",
  "civ-be": "assets/civ-be.svg",
  "civ-vi": "assets/civ-vi.svg",
}

export function setupSvgIcons(
  iconRegistry: MatIconRegistry,
  sanitizer: DomSanitizer,
): void {
  iconRegistry.addSvgIconSet(
    sanitizer.bypassSecurityTrustResourceUrl("./assets/mdi.svg"),
  )
  Object.keys(icons).forEach(name =>
    iconRegistry.addSvgIcon(
      name,
      sanitizer.bypassSecurityTrustResourceUrl(icons[name]),
    ),
  )
}
