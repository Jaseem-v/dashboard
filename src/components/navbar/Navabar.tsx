import "./navbar.scss"


function NavItem({ icons, label, active }: {
    icons: string;
    label: string;
    active: boolean;
}): JSX.Element {
    return (
        <div className={active ? "navitem active" : "navitem"}>
            <i className={icons}></i>
            <h4 className="navitem__text">{label}</h4>

        </div>
    )

}
export default function Navabar() {

    const NavItemDetails = [
        {
            icons: "icon_house_alt",
            label: "Home",
            active: true
        },
        {
            icons: "icon_calendar",
            label: "calander",
            active: false
        },
        {
            icons: "icon_document",
            label: "Notes",
            active: false
        },
        {
            icons: "icon_table",
            label: "Tables",
            active: false
        },
        {
            icons: "icon_genius",
            label: "Components",
            active: false
        },

        {
            icons: "icon_group",
            label: "Teams",
            active: false
        },
    ]
    return (
        <div className="navbar">
            <h2 className="navbar__title"> DS Panel </h2>

            {
                NavItemDetails.map((el) => {
                    return <NavItem {...el} />
                })
            }

        </div>
    )
}
