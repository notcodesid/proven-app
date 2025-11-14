
const SearchIcon = () => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0001 13L10.1335 10.1333M11.6667 6.33333C11.6667 9.27885 9.27885 11.6667 6.33333 11.6667C3.38781 11.6667 1 9.27885 1 6.33333C1 3.38781 3.38781 1 6.33333 1C9.27885 1 11.6667 3.38781 11.6667 6.33333Z" stroke="#A1A1AA" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

const CalendarIcon = () => {
    return (
        < svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M5.33334 1.33325V3.33325" stroke="white" strokeWidth="1.11111" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.6667 1.33325V3.33325" stroke="white" strokeWidth="1.11111" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.33334 6.05981H13.6667" stroke="white" strokeWidth="1.11111" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 5.66659V11.3333C14 13.3333 13 14.6666 10.6667 14.6666H5.33333C3 14.6666 2 13.3333 2 11.3333V5.66659C2 3.66659 3 2.33325 5.33333 2.33325H10.6667C13 2.33325 14 3.66659 14 5.66659Z" stroke="white" strokeWidth="1.11111" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.4631 9.13314H10.4691" stroke="white" strokeWidth="1.11111" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.4631 11.1331H10.4691" stroke="white" strokeWidth="1.11111" strokeLinecap="round"strokeLinejoin ="round" />
            <path d="M7.997 9.13314H8.00299" stroke="white" strokeWidth="1.11111" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.997 11.1331H8.00299" stroke="white" strokeWidth="1.11111" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.52953 9.13314H5.53552" stroke="white" strokeWidth="1.11111" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.52953 11.1331H5.53552" stroke="white" strokeWidth="1.11111" strokeLinecap="round" strokeLinejoin="round" />
        </svg >
    )
}

const StepsIcon = () => {
    return (
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_654_1803)">
                <path d="M6.06008 8.85335H8.12008V13.6533C8.12008 14.7733 8.72674 15 9.46674 14.16L14.5134 8.42668C15.1334 7.72668 14.8734 7.14668 13.9334 7.14668H11.8734V2.34668C11.8734 1.22668 11.2667 1.00001 10.5267 1.84001L5.48008 7.57335C4.86674 8.28001 5.12674 8.85335 6.06008 8.85335Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" shapeRendering="crispEdges" />
            </g>
            <defs>
                <filter id="filter0_d_654_1803" x="0.646271" y="0.83252" width="18.7057" height="22.335" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_654_1803" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_654_1803" result="shape" />
                </filter>
            </defs>
        </svg>

    )
}

interface IconProps {
    isActive?: boolean;
}

const HomeIcon = ({ isActive = false }: IconProps) => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M8.75 17H12.75M14.9304 21H6.56965C4.2609 21 2.3893 19.214 2.3893 17.0108V12.133C2.3893 11.4248 2.09447 10.7456 1.56969 10.2448C0.353805 9.0845 0.51187 7.16205 1.90251 6.19692L8.29124 1.763C9.75708 0.745668 11.7429 0.745668 13.2088 1.763L19.5975 6.19691C20.9881 7.16205 21.1462 9.0845 19.9303 10.2448C19.4055 10.7456 19.1107 11.4248 19.1107 12.133V17.0108C19.1107 19.214 17.2391 21 14.9304 21Z" 
                stroke={isActive ? "none" : "currentColor"} 
                fill={isActive ? "currentColor" : "none"}
                strokeWidth="1.5" 
                strokeLinecap="round"
            />
        </svg>
    )
}

const ChallengesIcon = ({ isActive = false }: IconProps) => {
    return (
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M15.875 4.50005C16.9795 4.50005 17.875 5.39548 17.875 6.50005M10.875 3.70259L11.5601 3.00005C13.691 0.814763 17.1459 0.814761 19.2768 3.00005C21.3505 5.12665 21.4142 8.55385 19.4211 10.76L13.6947 17.0982C12.1734 18.782 9.57654 18.782 8.05526 17.0982L2.32893 10.76C0.335783 8.55388 0.3995 5.12667 2.4732 3.00007C4.60412 0.814774 8.05904 0.814776 10.19 3.00007L10.875 3.70259Z" 
                stroke={isActive ? "none" : "currentColor"} 
                fill={isActive ? "currentColor" : "none"}
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    )
}

const ProfileIcon = ({ isActive = false }: IconProps) => {
    if (isActive) {
        return (
            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Body outline - keep as stroke */}
                <path 
                    d="M17.9338 18.5488C16.9404 15.8918 14.3786 14 11.375 14C8.37138 14 5.8096 15.8918 4.81617 18.5488M17.9338 18.5488C20.0422 16.7154 21.375 14.0134 21.375 11C21.375 5.47715 16.8978 1 11.375 1C5.85215 1 1.375 5.47715 1.375 11C1.375 14.0134 2.70785 16.7154 4.81617 18.5488M17.9338 18.5488C16.1781 20.0756 13.8845 21 11.375 21C8.86552 21 6.57194 20.0756 4.81617 18.5488" 
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5" 
                    strokeLinejoin="round"
                />
                {/* Avatar circle - fill when active */}
                <circle 
                    cx="11.375" 
                    cy="8" 
                    r="3" 
                    fill="currentColor"
                />
            </svg>
        )
    }
    
    return (
        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M17.9338 18.5488C16.9404 15.8918 14.3786 14 11.375 14C8.37138 14 5.8096 15.8918 4.81617 18.5488M17.9338 18.5488C20.0422 16.7154 21.375 14.0134 21.375 11C21.375 5.47715 16.8978 1 11.375 1C5.85215 1 1.375 5.47715 1.375 11C1.375 14.0134 2.70785 16.7154 4.81617 18.5488M17.9338 18.5488C16.1781 20.0756 13.8845 21 11.375 21C8.86552 21 6.57194 20.0756 4.81617 18.5488M14.375 8C14.375 9.65685 13.0319 11 11.375 11C9.71815 11 8.375 9.65685 8.375 8C8.375 6.34315 9.71815 5 11.375 5C13.0319 5 14.375 6.34315 14.375 8Z" 
                stroke="currentColor" 
                fill="none"
                strokeWidth="1.5" 
                strokeLinejoin="round"
            />
        </svg>
    )
}





export { SearchIcon, CalendarIcon, StepsIcon, HomeIcon, ChallengesIcon, ProfileIcon };