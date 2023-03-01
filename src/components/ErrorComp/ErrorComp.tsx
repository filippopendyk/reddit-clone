type Props = {
    error: string;
}

const ErrorComp: React.FC<Props> = ({error}) => {
    return <>
        <h4>Error while loading posts! Try again!</h4>
        <p>Reason: {error}</p>
    </>
}

export default ErrorComp;