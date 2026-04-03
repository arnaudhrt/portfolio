import { GitHubCalendar } from "react-github-calendar";

export default function GithubActivity() {
  return (
    <div>
      <a href="https://github.com/arnaudhrt" target="_blank" rel="noopener noreferrer">
        <div className="overflow-x-auto">
          <GitHubCalendar username="arnaudhrt" colorScheme="dark" fontSize={12} blockSize={11} blockMargin={3} />
        </div>
      </a>
    </div>
  );
}
