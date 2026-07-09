"use client";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

export const GithubGraph = () => {
  const { theme } = useTheme();
  //uses theme secondary styles for the first color, and then uses default for the rest
  const calendarTheme = {
    light: ["#c9d7e0", "#0e4429", "#006d32", "#26a641", "#39d353"],
    dark: ["#232a2f", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <div className="flex w-full justify-center sm:w-auto">
      <div className="flex w-full flex-col sm:w-auto">
        <h2 className="my-8 text-center text-2xl sm:my-10 sm:text-4xl">
          {" "}
          <a
            href="https://github.com/ryanfritzc"
            className="text-ring hover:underline">
            My GitHub Contributions
          </a>
        </h2>
        <div className="w-full overflow-x-auto pb-2 sm:w-auto sm:overflow-visible sm:pb-0">
          <div className="mx-auto min-w-[700px] sm:min-w-0">
            <GitHubCalendar
              username="ryanfritzc"
              theme={calendarTheme}
              colorScheme={theme === "dark" ? "dark" : "light"}
              tooltips={{
                activity: {
                  text: (activity) =>
                    `${activity.level} commits on ${activity.date}`,
                  placement: "right",
                  offset: 6,
                  hoverRestMs: 300,
                  transitionStyles: {
                    duration: 100,
                  },
                  withArrow: true,
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
