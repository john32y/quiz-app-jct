const gitHubUrl = "http://github.com/john32y/quiz-app-jct";
const getFullyear = new Date().getFullYear();

export default function Footer(){
    return (
        <footer>
            <p>&copy; {getFullyear}
            <br />
            <a href={gitHubUrl} target="_blank" rel="noreferrer">See Code in Github</a>
            </p>
        </footer>
    )
}