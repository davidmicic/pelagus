type PropsButton = {
    onClickHandler?: () => void
    label: string
}

export default function Button(props: PropsButton) {
    return (
        <button
            type="button"
            className="rounded bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-tertiary"
            onClick={props.onClickHandler}
        >
            {props.label}
        </button>
    )
  }
  