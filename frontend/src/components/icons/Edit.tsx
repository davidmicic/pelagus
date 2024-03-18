import { PencilSquareIcon as SolidIcon} from '@heroicons/react/24/solid'
import { PencilSquareIcon as OutlinedIcon } from '@heroicons/react/24/outline'
import { Icon } from './Icon'


type PropsEdit = {
    onEditTaskButtonHandler: () => void
}

export function Edit(props: PropsEdit) {
    return (
        <Icon 
            DefaultIcon={<OutlinedIcon className="h-6 w-6 text-primary"/>}
            HoveredIcon={<SolidIcon className="h-6 w-6 text-primary" />}
            onClickHandler={props.onEditTaskButtonHandler}
        />
       
    )
}
