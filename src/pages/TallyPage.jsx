import CourseLandingPage from "../components/CourseLandingPage";
import { coursePages } from "../data/coursePages";

export default function TallyPage() {
  return <CourseLandingPage course={coursePages.tally} />;
}
