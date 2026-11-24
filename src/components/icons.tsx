// Inline SVG icons (no icon library). Paths are copied from Ant Design Icons (@ant-design/icons-svg 4.4.2),
// MIT License, Copyright (c) 2018-present Ant UED, https://github.com/ant-design/ant-design-icons
// They render at 1em in currentColor, so size and color come from text-* classes, like the text around them.
// They are decorative (aria-hidden): give links that hold only an icon an aria-label.

type IconProps = { className?: string }

// Base classes match the old .anticon wrapper (inline-block, vertical-align -0.125em) so icons sit on the text baseline
function Icon ({ d, className }: IconProps & { d: string }) {
  return (
    <svg
      viewBox="64 64 896 896"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={`inline-block align-[-0.125em]${className ? ` ${className}` : ""}`}
    >
      <path d={d} />
    </svg>
  )
}

// CalendarOutlined
export function CalendarIcon ({ className }: IconProps) {
  return <Icon className={className} d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z" />
}

// EnvironmentOutlined
export function LocationIcon ({ className }: IconProps) {
  return <Icon className={className} d="M854.6 289.1a362.49 362.49 0 00-79.9-115.7 370.83 370.83 0 00-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 00169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0022.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z" />
}

// FileTextOutlined
export function FileTextIcon ({ className }: IconProps) {
  return <Icon className={className} d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z" />
}

// ArrowRightOutlined
export function ArrowRightIcon ({ className }: IconProps) {
  return <Icon className={className} d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
}

// GithubFilled
export function GithubIcon ({ className }: IconProps) {
  return <Icon className={className} d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
}

// LinkedinFilled
export function LinkedinIcon ({ className }: IconProps) {
  return <Icon className={className} d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
}

// XOutlined
export function XIcon ({ className }: IconProps) {
  return <Icon className={className} d="M921 912L601.11 445.75l.55.43L890.08 112H793.7L558.74 384 372.15 112H119.37l298.65 435.31-.04-.04L103 912h96.39L460.6 609.38 668.2 912zM333.96 184.73l448.83 654.54H706.4L257.2 184.73z" />
}
