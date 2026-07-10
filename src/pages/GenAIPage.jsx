import CourseLandingPage from "../components/CourseLandingPage";
import { coursePages } from "../data/coursePages";

export default function GenAIPage() {
  return <CourseLandingPage course={coursePages.genai} />;
}
