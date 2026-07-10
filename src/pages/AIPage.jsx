import CourseLandingPage from "../components/CourseLandingPage";
import { coursePages } from "../data/coursePages";

export default function AIPage() {
  return <CourseLandingPage course={coursePages.ai} />;
}
