import { TrashIcon as SolidIcon} from '@heroicons/react/24/solid'
import { TrashIcon as OutlinedIcon } from '@heroicons/react/24/outline'
import { Icon } from './Icon'

type PropsTrash = {
    onDeleteTaskButtonHandler: () => void
}


export function Trash(props: PropsTrash) {
    return (
        <Icon 
            DefaultIcon={<OutlinedIcon className="h-6 w-6 text-primary"/>}
            HoveredIcon={<SolidIcon className="h-6 w-6 text-red-500" />}
            onClickHandler={props.onDeleteTaskButtonHandler}
        />
    )
}
