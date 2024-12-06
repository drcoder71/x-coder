import CodeEditorComponent from "../components/code-editor/editor/CodeEditorComponent";
import CodeEditorPage from "./pages/code-editor/page";

export default function App() {
  return (
    <div className="max-w-[1920px] w-full min-h-[100vh] bg-[#669bbc] mx-auto">
      <CodeEditorPage />
      {/* <CodeEditorComponent /> */}
    </div>
  )
}
