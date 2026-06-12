"use client";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import "react-activity-calendar/tooltips.css";

export const GithubGraph = () => {
  const { theme } = useTheme();
  //uses theme secondary styles for the first color, and then uses default for the rest
  const calendarTheme = {
    light: ["#c9d7e0", "#0e4429", "#006d32", "#26a641", "#39d353"],
    dark: ["#232a2f", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <h2 className="text-center text-4xl my-10">
          {" "}
          <a
            href="https://github.com/ryanfritzc"
            className="text-ring hover:underline">
            My GitHub Contributions
          </a>
        </h2>
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
  );
};
