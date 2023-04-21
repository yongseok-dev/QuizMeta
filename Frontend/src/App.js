import { Container } from "react-bootstrap";
import Header from "./component/Haeder";
import Footer from "./component/Footer";
import Main from "./page/Main";
import Signup from "./page/member/Signup";
import Signin from "./page/member/Signin";
import EditMember from "./page/member/EditMember";
import AddQuizPage from "./page/quiz/AddQuizPage";
import QuizListPage from "./page/quiz/QuizListPage";
import QuizDetailPage from "./page/quiz/QuizDetailPage";
import NotePage from "./page/note/NotePage";
import ReviewSetting from "./page/review/ReviewSetting";
import ReviewListPage from "./page/review/ReviewListPage";
import MemberManagement from "./page/admin/MemberManagement";
import QuizManagement from "./page/admin/QuizManagement";
import CategoryManagement from "./page/admin/CategoryManagement";
function App() {
  return (
    <div className="App">
      <Header />
      <Container className="my-4">
        <Main />
        {/* member */}
        <Signup />
        <Signin />
        <EditMember />
        {/* quiz */}
        <QuizListPage />
        <AddQuizPage />
        <QuizDetailPage />
        {/* note */}
        <NotePage />
        {/* review */}
        <ReviewListPage />
        <ReviewSetting />
        {/* admin */}
        <MemberManagement />
        <QuizManagement />
        <CategoryManagement />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
