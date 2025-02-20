import Ex from './ex.jsx'

function App() {
  let name='anjan';
  let top=()=>{
    return 'you are on top';
  };
  return <div>
    <h1>hi babe {name} and remember {top()}</h1>
  <Ex/><button>hi darling</button>
  <Ex/><button>hi darling</button>
  <Ex/><button>hi darling</button>
  <a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input" />
<input class="btn btn-primary" type="submit" value="Submit" />
<input class="btn btn-primary" type="reset" value="Reset" />
</div>
}

export default App
