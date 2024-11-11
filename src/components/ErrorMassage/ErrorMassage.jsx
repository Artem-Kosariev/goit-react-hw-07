import css from './ErrorMassage.module.css'

const ErrorMassage = () => {
    return (
        <div>
            <p className={css.error}>Something went wrong, try again later!</p>
        </div>
    )
}

export default ErrorMassage