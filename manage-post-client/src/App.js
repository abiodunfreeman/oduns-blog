import './App.css';
import Form from './components/Form';
/*
    form(action="" method="post")
        label(for="post-form-title") Title:  
        input(type="text" name="title" id="post-form-title")
        label(for="post-form-title") Message:  
        input(type="text" name="message" id="post-form-message")
        label(for="post-form-published") Publish?
        input(type="checkbox", name="published" id='post-form-published' value='true')
        button(type="submit") Create Post  
*/

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
