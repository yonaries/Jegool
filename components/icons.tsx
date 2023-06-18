import {
  AlertTriangle,
  ArrowRight,
  Box,
  Banknote,
  Bell,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  ClipboardCheck,
  Copy,
  CreditCard,
  File,
  FileText,
  Facebook,
  Edit,
  HelpCircle,
  Home,
  Heart,
  Image,
  Instagram,
  Laptop,
  LogOut,
  Loader2,
  LucideProps,
  Moon,
  Mail,
  MoreVertical,
  MoreHorizontal,
  Palette,
  Pizza,
  Plus,
  PieChart,
  Settings,
  Share,
  SunMedium,
  Trash,
  Twitter,
  User,
  X,
  Youtube,
  type Icon as LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10"></circle>
    </svg>
  ),
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  twitter: Twitter,
  check: Check,
  copy: Copy,
  copyDone: ClipboardCheck,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  home: Home,
  heart: Heart,
  banknote: Banknote,
  pieChart: PieChart,
  box: Box,
  edit: Edit,
  mail: Mail,
  bell: Bell,
  upDown: ChevronsUpDown,
  logOut: LogOut,
  palette: Palette,
  share: Share,
  moreHorizontal: MoreHorizontal,
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  radix: (props: LucideProps) => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  ),
  aria: (props: LucideProps) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  npm: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
        fill="currentColor"
      />
    </svg>
  ),
  yarn: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
        fill="currentColor"
      />
    </svg>
  ),
  pnpm: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  react: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="currentColor"
      />
    </svg>
  ),
  tailwind: (props: LucideProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: LucideProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: LucideProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  instagramColor: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      width="24"
      viewBox="0 0 24 24"
      id="instagram"
    >
      <defs>
        <radialGradient
          id="a"
          cx="6.601"
          cy="99.766"
          r="129.502"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".09" stop-color="#fa8f21"></stop>
          <stop offset=".78" stop-color="#d82d7e"></stop>
        </radialGradient>
        <radialGradient
          id="b"
          cx="70.652"
          cy="96.49"
          r="113.963"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop>
          <stop offset="1" stop-color="#8c3aaa"></stop>
        </radialGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
        data-name="Path 16"
      ></path>
      <path
        fill="url(#b)"
        d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
        data-name="Path 17"
      ></path>
      <path
        fill="#fff"
        d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
        data-name="Path 18"
        transform="translate(-422.637 -426.196)"
      ></path>
    </svg>
  ),
  facebookColor: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="facebook">
      <path
        fill="#1976D2"
        d="M14 0H2C.897 0 0 .897 0 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V2c0-1.103-.897-2-2-2z"
      ></path>
      <path
        fill="#FAFAFA"
        fill-rule="evenodd"
        d="M13.5 8H11V6c0-.552.448-.5 1-.5h1V3h-2a3 3 0 0 0-3 3v2H6v2.5h2V16h3v-5.5h1.5l1-2.5z"
        clip-rule="evenodd"
      ></path>
    </svg>
  ),
  snapchatColor: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="snapchat">
      <path
        fill="#fffc00"
        d="M147.553 423.021v.023c.308 11.424.403 22.914 2.33 34.268 2.042 12.012 4.961 23.725 10.53 34.627 7.529 14.756 17.869 27.217 30.921 37.396 9.371 7.309 19.608 13.111 30.94 16.771 16.524 5.33 33.571 7.373 50.867 7.473 10.791.068 21.575.338 32.37.293 78.395-.33 156.792.566 235.189-.484 10.403-.141 20.636-1.41 30.846-3.277 19.569-3.582 36.864-11.932 51.661-25.133 17.245-15.381 28.88-34.205 34.132-56.924 3.437-14.85 4.297-29.916 4.444-45.035v-3.016c0-1.17-.445-256.892-.486-260.272-.115-9.285-.799-18.5-2.54-27.636-2.117-11.133-5.108-21.981-10.439-32.053-5.629-10.641-12.68-20.209-21.401-28.57-13.359-12.81-28.775-21.869-46.722-26.661-16.21-4.327-32.747-5.285-49.405-5.27-.027-.004-.09-.173-.094-.255H278.56c-.005.086-.008.172-.014.255-9.454.173-18.922.102-28.328 1.268-10.304 1.281-20.509 3.21-30.262 6.812-15.362 5.682-28.709 14.532-40.11 26.347-12.917 13.386-22.022 28.867-26.853 46.894-4.31 16.084-5.248 32.488-5.271 49.008"
      ></path>
      <path
        fill="#fff"
        d="M407.001 473.488c-1.068 0-2.087-.039-2.862-.076-.615.053-1.25.076-1.886.076-22.437 0-37.439-10.607-50.678-19.973-9.489-6.703-18.438-13.031-28.922-14.775-5.149-.854-10.271-1.287-15.22-1.287-8.917 0-15.964 1.383-21.109 2.389-3.166.617-5.896 1.148-8.006 1.148-2.21 0-4.895-.49-6.014-4.311-.887-3.014-1.523-5.934-2.137-8.746-1.536-7.027-2.65-11.316-5.281-11.723-28.141-4.342-44.768-10.738-48.08-18.484a7.187 7.187 0 0 1-.584-2.443 4.518 4.518 0 0 1 3.777-4.711c22.348-3.68 42.219-15.492 59.064-35.119 13.049-15.195 19.457-29.713 20.145-31.316a2.85 2.85 0 0 1 .101-.217c3.247-6.588 3.893-12.281 1.926-16.916-3.626-8.551-15.635-12.361-23.58-14.882-1.976-.625-3.845-1.217-5.334-1.808-7.043-2.782-18.626-8.66-17.083-16.773 1.124-5.916 8.949-10.036 15.273-10.036 1.756 0 3.312.308 4.622.923 7.146 3.348 13.575 5.045 19.104 5.045 6.876 0 10.197-2.618 11-3.362a1170.709 1170.709 0 0 0-.679-11.262c-1.614-25.675-3.627-57.627 4.546-75.95 24.462-54.847 76.339-59.112 91.651-59.112a3909.561 3909.561 0 0 0 7.582-.071c15.354 0 67.339 4.27 91.816 59.15 8.173 18.335 6.158 50.314 4.539 76.016l-.076 1.23c-.222 3.49-.427 6.793-.6 9.995.756.696 3.795 3.096 9.978 3.339 5.271-.202 11.328-1.891 17.998-5.014 2.062-.968 4.345-1.169 5.895-1.169 2.343 0 4.727.456 6.714 1.285l.106.041c5.66 2.009 9.367 6.024 9.447 10.242.071 3.932-2.851 9.809-17.223 15.485-1.472.583-3.35 1.179-5.334 1.808-7.952 2.524-19.951 6.332-23.577 14.878-1.97 4.635-1.322 10.326 1.926 16.912.036.072.067.145.102.221 1 2.344 25.205 57.535 79.209 66.432a4.523 4.523 0 0 1 3.778 4.711 7.252 7.252 0 0 1-.598 2.465c-3.289 7.703-19.915 14.09-48.064 18.438-2.642.408-3.755 4.678-5.277 11.668-.63 2.887-1.271 5.717-2.146 8.691-.819 2.797-2.641 4.164-5.567 4.164h-.441c-1.905 0-4.604-.346-8.008-1.012-5.95-1.158-12.623-2.236-21.109-2.236-4.948 0-10.069.434-15.224 1.287-10.473 1.744-19.421 8.062-28.893 14.758-13.265 9.379-28.272 19.987-50.707 19.987"
      ></path>
      <path
        fill="#020202"
        d="M408.336 124.235c14.455 0 64.231 3.883 87.688 56.472 7.724 17.317 5.744 48.686 4.156 73.885-.248 3.999-.494 7.875-.694 11.576l-.084 1.591 1.062 1.185c.429.476 4.444 4.672 13.374 5.017l.144.008.15-.003c5.904-.225 12.554-2.059 19.776-5.442 1.064-.498 2.48-.741 3.978-.741 1.707 0 3.521.321 5.017.951l.226.09c3.787 1.327 6.464 3.829 6.505 6.093.022 1.28-.935 5.891-14.359 11.194-1.312.518-3.039 1.069-5.041 1.7-8.736 2.774-21.934 6.96-26.376 17.427-2.501 5.896-1.816 12.854 2.034 20.678 1.584 3.697 26.52 59.865 82.631 69.111a2.487 2.487 0 0 1-.229.9c-.951 2.24-6.996 9.979-44.612 15.783-5.886.902-7.328 7.5-9 15.17-.604 2.746-1.218 5.518-2.062 8.381-.258.865-.306.914-1.233.914h-.442c-1.668 0-4.2-.346-7.135-.922-5.345-1.041-12.647-2.318-21.982-2.318-5.21 0-10.577.453-15.962 1.352-11.511 1.914-20.872 8.535-30.786 15.543-13.314 9.408-27.075 19.143-48.071 19.143-.917 0-1.812-.031-2.709-.076l-.236-.01-.237.018c-.515.045-1.034.068-1.564.068-20.993 0-34.76-9.732-48.068-19.143-9.916-7.008-19.282-13.629-30.791-15.543-5.38-.896-10.752-1.352-15.959-1.352-9.333 0-16.644 1.428-21.978 2.471-2.935.574-5.476 1.066-7.139 1.066-1.362 0-1.388-.08-1.676-1.064-.844-2.865-1.461-5.703-2.062-8.445-1.676-7.678-3.119-14.312-9.002-15.215-37.613-5.809-43.659-13.561-44.613-15.795a2.739 2.739 0 0 1-.231-.918c56.11-9.238 81.041-65.408 82.63-69.119 3.857-7.818 4.541-14.775 2.032-20.678-4.442-10.461-17.638-14.653-26.368-17.422-2.007-.635-3.735-1.187-5.048-1.705-11.336-4.479-14.823-8.991-14.305-11.725.601-3.153 6.067-6.359 10.837-6.359 1.072 0 2.012.173 2.707.498 7.747 3.631 14.819 5.472 21.022 5.472 9.751 0 14.091-4.537 14.557-5.055l1.057-1.182-.085-1.583c-.197-3.699-.44-7.574-.696-11.565-1.583-25.205-3.563-56.553 4.158-73.871 23.37-52.396 72.903-56.435 87.525-56.435.36 0 6.717-.065 6.717-.065.26-.002.549-.006.852-.006m0-9.038h-.017c-.333 0-.646 0-.944.004l-6.633.066c-8.566 0-25.705 1.21-44.115 9.336-10.526 4.643-19.994 10.921-28.14 18.66-9.712 9.221-17.624 20.59-23.512 33.796-8.623 19.336-6.576 51.905-4.932 78.078l.006.041c.176 2.803.361 5.73.53 8.582-1.265.581-3.316 1.194-6.339 1.194-4.864 0-10.648-1.555-17.187-4.619-1.924-.896-4.12-1.349-6.543-1.349-3.893 0-7.997 1.146-11.557 3.239-4.479 2.63-7.373 6.347-8.159 10.468-.518 2.726-.493 8.114 5.492 13.578 3.292 3.008 8.128 5.782 14.37 8.249 1.638.645 3.582 1.261 5.641 1.914 7.145 2.271 17.959 5.702 20.779 12.339 1.429 3.365.814 7.793-1.823 13.145-.069.146-.138.289-.201.439-.659 1.539-6.807 15.465-19.418 30.152-7.166 8.352-15.059 15.332-23.447 20.752-10.238 6.617-21.316 10.943-32.923 12.855a9.038 9.038 0 0 0-7.559 9.424c.078 1.33.39 2.656.931 3.939l.013.023c1.843 4.311 6.116 7.973 13.063 11.203 8.489 3.943 21.185 7.26 37.732 9.855.836 1.59 1.704 5.586 2.305 8.322.629 2.908 1.285 5.898 2.22 9.074 1.009 3.441 3.626 7.553 10.349 7.553 2.548 0 5.478-.574 8.871-1.232 4.969-.975 11.764-2.305 20.245-2.305 4.702 0 9.575.414 14.48 1.229 9.455 1.574 17.606 7.332 27.037 14 13.804 9.758 29.429 20.803 53.302 20.803.651 0 1.304-.021 1.949-.066.789.037 1.767.066 2.799.066 23.88 0 39.501-11.049 53.29-20.799l.022-.02c9.433-6.66 17.575-12.41 27.027-13.984 4.903-.814 9.775-1.229 14.479-1.229 8.102 0 14.517 1.033 20.245 2.15 3.738.736 6.643 1.09 8.872 1.09l.218.004h.226c4.917 0 8.53-2.699 9.909-7.422.916-3.109 1.57-6.029 2.215-8.986.562-2.564 1.46-6.674 2.296-8.281 16.558-2.6 29.249-5.91 37.739-9.852 6.931-3.215 11.199-6.873 13.053-11.166.556-1.287.881-2.621.954-3.979a9.036 9.036 0 0 0-7.56-9.424c-51.585-8.502-74.824-61.506-75.785-63.758a6.454 6.454 0 0 0-.205-.438c-2.637-5.354-3.246-9.777-1.816-13.148 2.814-6.631 13.621-10.062 20.771-12.332 2.07-.652 4.021-1.272 5.646-1.914 7.039-2.78 12.07-5.796 15.389-9.221 3.964-4.083 4.736-7.995 4.688-10.555-.121-6.194-4.856-11.698-12.388-14.393-2.544-1.052-5.445-1.607-8.399-1.607-2.011 0-4.989.276-7.808 1.592-6.035 2.824-11.441 4.368-16.082 4.588-2.468-.125-4.199-.66-5.32-1.171.141-2.416.297-4.898.458-7.486l.067-1.108c1.653-26.19 3.707-58.784-4.92-78.134-5.913-13.253-13.853-24.651-23.604-33.892-8.178-7.744-17.678-14.021-28.242-18.661-18.384-8.066-35.522-9.271-44.1-9.271"
      ></path>
      <path fill="none" d="M147.553 39.443h514.231v514.23H147.553z"></path>
    </svg>
  ),
  whatsappColor: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="whatsapp">
      <defs>
        <linearGradient
          id="a"
          x1=".5"
          x2=".5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#61fd7d"></stop>
          <stop offset="1" stop-color="#2bb826"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M101.971 77.094c0 .558-.017 1.77-.051 2.705a53.717 53.717 0 0 1-.538 6.589 21.949 21.949 0 0 1-1.847 5.521 19.654 19.654 0 0 1-8.653 8.644 21.993 21.993 0 0 1-5.552 1.847 53.913 53.913 0 0 1-6.539.528c-.936.033-2.148.05-2.7.05l-50.223-.008c-.558 0-1.769-.017-2.705-.051a53.744 53.744 0 0 1-6.589-.538 21.951 21.951 0 0 1-5.521-1.847A19.654 19.654 0 0 1 2.4 91.881a21.988 21.988 0 0 1-1.843-5.552 53.954 53.954 0 0 1-.528-6.539 92.845 92.845 0 0 1-.05-2.7l.008-50.224c0-.558.017-1.77.051-2.705a53.738 53.738 0 0 1 .538-6.589 21.946 21.946 0 0 1 1.847-5.521A19.655 19.655 0 0 1 11.076 3.4a22 22 0 0 1 5.552-1.848 53.912 53.912 0 0 1 6.539-.528c.936-.033 2.148-.05 2.7-.05l50.228.012c.559 0 1.77.017 2.705.051a53.744 53.744 0 0 1 6.589.538 21.946 21.946 0 0 1 5.521 1.847 19.653 19.653 0 0 1 8.644 8.653 21.988 21.988 0 0 1 1.848 5.552 53.974 53.974 0 0 1 .528 6.539c.033.936.05 2.148.05 2.7l-.008 50.223Z"
        data-name="Path 19"
        transform="translate(.021 -.978)"
      ></path>
      <g data-name="Group 2">
        <path
          fill="#fff"
          d="M78.02 24.131A36.58 36.58 0 0 0 20.452 68.25l-5.189 18.948 19.39-5.085a36.561 36.561 0 0 0 17.479 4.451h.015A36.578 36.578 0 0 0 78.02 24.131ZM52.15 80.388h-.012a30.361 30.361 0 0 1-15.473-4.236l-1.11-.659-11.506 3.017 3.071-11.215-.723-1.15a30.4 30.4 0 1 1 25.754 14.242Zm16.67-22.761c-.914-.457-5.407-2.668-6.245-2.973s-1.447-.457-2.056.457-2.361 2.973-2.894 3.582-1.066.686-1.98.229a24.963 24.963 0 0 1-7.349-4.535 27.531 27.531 0 0 1-5.084-6.329c-.533-.915-.057-1.409.4-1.865.411-.409.914-1.067 1.371-1.6a6.23 6.23 0 0 0 .914-1.524 1.682 1.682 0 0 0-.076-1.6c-.228-.457-2.056-4.954-2.818-6.783-.742-1.782-1.5-1.541-2.056-1.568a36.004 36.004 0 0 0-1.752-.032 3.358 3.358 0 0 0-2.437 1.143 10.246 10.246 0 0 0-3.2 7.622c0 4.5 3.275 8.841 3.732 9.451s6.444 9.838 15.612 13.8a52.582 52.582 0 0 0 5.21 1.925 12.535 12.535 0 0 0 5.756.362c1.756-.262 5.407-2.21 6.169-4.344a7.635 7.635 0 0 0 .533-4.344c-.229-.381-.838-.61-1.752-1.067Z"
          data-name="Path 20"
        ></path>
      </g>
    </svg>
  ),
  telegramColor: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Telegram"
      viewBox="0 0 24 24"
      id="telegram"
    >
      <rect width="512" height="512" fill="#37aee2" rx="15%"></rect>
      <path fill="#c8daea" d="M199 404c-11 0-10-4-13-14l-32-105 245-144"></path>
      <path fill="#a9c9dd" d="M199 404c7 0 11-4 16-8l45-43-56-34"></path>
      <path
        fill="#f6fbfe"
        d="M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4"
      ></path>
    </svg>
  ),
  discordColor: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#7289da"
      aria-label="Discord"
      viewBox="0 0 24 24"
      id="discord"
    >
      <rect width="512" height="512" rx="15%"></rect>
      <path
        fill="#fff"
        d="m346 392-21-25c41-11 57-39 57-39-52 49-194 51-249 0 0 0 14 26 56 39l-23 25c-70-1-97-48-97-48 0-104 46-187 46-187 47-33 90-33 90-33l3 4c-58 16-83 42-83 42 68-46 208-42 263 0 1-1-33-28-86-42l5-4s43 0 90 33c0 0 46 83 46 187 0 0-27 47-97 48z"
      ></path>
      <ellipse cx="196" cy="279" rx="33" ry="35"></ellipse>
      <ellipse cx="312" cy="279" rx="33" ry="35"></ellipse>
    </svg>
  ),
  twitterColor: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
      image-rendering="optimizeQuality"
      shape-rendering="geometricPrecision"
      text-rendering="geometricPrecision"
      viewBox="0 0 24 24"
      id="twitter"
    >
      <rect
        width="6.827"
        height="6.827"
        fill="#0a93e2"
        rx="1.456"
        ry="1.456"
      ></rect>
      <path
        fill="#fff"
        d="M5.49 2.378a1.64 1.64 0 0 1-.471.129c.17-.102.3-.263.36-.454a1.65 1.65 0 0 1-.52.199.82.82 0 0 0-1.42.561A.82.82 0 0 0 3.46 3a2.33 2.33 0 0 1-1.691-.857.82.82 0 0 0 .254 1.096.816.816 0 0 1-.372-.103v.01c0 .398.283.73.658.805a.817.817 0 0 1-.37.014.822.822 0 0 0 .766.57 1.646 1.646 0 0 1-1.215.34c.363.233.794.368 1.258.368 1.51 0 2.335-1.25 2.335-2.335 0-.035 0-.07-.002-.106.16-.115.3-.26.41-.424z"
      ></path>
    </svg>
  ),
  linkedinColor: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="linkedin">
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <rect
            width="28.87"
            height="28.87"
            fill="#0b86ca"
            rx="6.48"
            ry="6.48"
          ></rect>
          <path
            fill="#fff"
            d="M8 12h3v9.68H8zm1.53-4.81a1.74 1.74 0 11-1.74 1.75 1.74 1.74 0 011.74-1.75M12.92 12h2.89v1.32a3.16 3.16 0 012.85-1.56c3 0 3.61 2 3.61 4.61v5.31h-3V17c0-1.12 0-2.57-1.56-2.57s-1.8 1.22-1.8 2.48v4.79h-3z"
          ></path>
        </g>
      </g>
    </svg>
  ),
};
