import Image from 'next/image'
import SidebarImage from 'assets/images/bg-sidebar-desktop.svg'

const SideBar = () => {
    return (
        <Image width={274} height={568} src={SidebarImage} alt="sidebar image" style={{ margin: 15 }} />
    )
}

export default SideBar
