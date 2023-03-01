type Props = {
    error: string;
}

const ErrorComp: React.FC<Props> = ({error}) => {
    return <>
        <h3>Error while loading posts! Try again!</h3>
        <p>Reason: {error}</p>
    </>
}

export default ErrorComp;