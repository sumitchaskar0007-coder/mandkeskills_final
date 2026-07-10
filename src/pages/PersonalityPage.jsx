import CourseLandingPage from "../components/CourseLandingPage";
import { coursePages } from "../data/coursePages";

export default function PersonalityPage() {
  return <CourseLandingPage course={coursePages.personality} />;
}
