import { ProjectStage } from "@/data/types";
import { getAllStages, getStageIndex } from "@/lib/utils";

export function PropertyTimeline({ currentStage }: { currentStage: ProjectStage }) {
  const stages = getAllStages();
  const currentIndex = getStageIndex(currentStage);

  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-[600px] items-center justify-between">
        {stages.map((stage, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;
          const isComplete = currentStage === "Complete";

          let dotColor = "bg-gray-200";
          let textColor = "text-charcoal/40";
          if (isComplete || isCompleted) {
            dotColor = "bg-stage-complete";
            textColor = "text-stage-complete";
          } else if (isCurrent) {
            dotColor = "bg-stage-active";
            textColor = "text-stage-active";
          }

          return (
            <div key={stage} className="flex flex-1 flex-col items-center">
              <div className="flex w-full items-center">
                {index > 0 && (
                  <div
                    className={`h-0.5 flex-1 ${
                      isCompleted || (isComplete && index <= currentIndex)
                        ? "bg-stage-complete"
                        : "bg-gray-200"
                    }`}
                  />
                )}
                <div
                  className={`h-4 w-4 flex-shrink-0 rounded-full ${dotColor} ${
                    isCurrent && !isComplete
                      ? "ring-4 ring-stage-active/20"
                      : ""
                  }`}
                />
                {index < stages.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 ${
                      isCompleted ? "bg-stage-complete" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
              <span
                className={`mt-2 text-center text-[10px] font-medium leading-tight sm:text-xs ${textColor}`}
              >
                {stage}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
