import { useState } from "react"

type PropsIcon = {
    DefaultIcon: JSX.Element
    HoveredIcon: JSX.Element
    onClickHandler: () => void
}

export function Icon({DefaultIcon, HoveredIcon, onClickHandler}: PropsIcon) {
    const [hovered, setHovered] = useState<boolean>(false)

    const onMouseEnterHandler = () => {
        setHovered(true);
    }

    const onMouseLeaveHandler = () => {
        setHovered(false);
    }

    return (
        <div
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
            onClick={onClickHandler}
        >
            {
                hovered ? HoveredIcon : DefaultIcon
            }
        </div>

    )
}
