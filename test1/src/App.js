import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import UseState1 from "./useState_ex/UseState1";
import UseState2 from "./useState_ex/UseState2";
import UseState3 from "./useState_ex/UseState3";
import UseEffect1 from "./useEffect_ex/UseEffect1";
import UseEffect2 from "./useEffect_ex/UseEffect2";
import UseMemo1 from "./useMemo_ex/UseMemo1";
import UseMemo2 from "./useMemo_ex/UseMemo2";
import UseCallback1 from "./useCallback_ex/UseCallback1";
import UseCallback2 from "./useCallback_ex/UseCallback2";
import UseRef1 from "./useRef_ex/UseRef1";
import UseRef2 from "./useRef_ex/UseRef2";
import Accommodate from "./reactHooks_ex/Accommodate";
import CommentList from "./comment_ex/CommentList";

function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/useState1">UseState1</Link>
        <Link to="/useState2">useState2</Link>
        <Link to="/useState3">useState3</Link>
        <Link to="/useEffect1">useEffect1</Link>
        <Link to="/useEffect2">useEffect2</Link>
        <Link to="/useMemo1">useMemo1</Link>
        <Link to="/useMemo2">useMemo2</Link>
        <Link to="/useCallback1">useCallback1</Link>
        <Link to="/useCallback2">useCallback2</Link>
        <Link to="/useRef1">useRef1</Link>
        <Link to="/useRef2">useRef2</Link>
        <Link to="/Accommodate">Accommodate</Link>
        <Link to="/CommentList">CommentList</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/useState1" element={<UseState1 />} />
        <Route path="/useState2" element={<UseState2 />} />
        <Route path="/useState3" element={<UseState3 />} />
        <Route path="/useEffect1" element={<UseEffect1 />} />
        <Route path="/useEffect2" element={<UseEffect2 />} />
        <Route path="/useMemo1" element={<UseMemo1 />} />
        <Route path="/useMemo2" element={<UseMemo2 />} />
        <Route path="/useCallback1" element={<UseCallback1 />} />
        <Route path="/useCallback2" element={<UseCallback2 />} />
        <Route path="/useRef1" element={<UseRef1 />} />
        <Route path="/useRef2" element={<UseRef2 />} />
        <Route path="/accommodate" element={<Accommodate />} />
        <Route path="/commentList" element={<CommentList />} />
      </Routes>
    </div>
  );
}

export default App;

