import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, PlayIcon, LogoIcon, LightBulbIcon, MagnifierIcon, ChartIcon} from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <PlaneIcon />,
    title: "1. Select a problem",
    description:
      "Choose a problem from our curated bank of problems to present to your interviewee.",
  },
  {
    icon: <MedalIcon />,
    title: "2. Solve the problem",
    description: "Engage in a collaborative problem-solving session with your interviewee.",
  },
  {
    icon: <ChartIcon />,
    title: "3. Review",
    description:
      "Submit the solution for grading and view the playback to reflect on the session.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How it{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          works{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
      Experience the seamless functionality of our exceptional 3D interview platform.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-3 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
