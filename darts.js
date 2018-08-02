class DartsTravel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedMap: 0 };
    this.selectMap = this.selectMap.bind(this);
    this.throwDart = this.throwDart.bind(this);
    this.maps = [
      { id: 0, name: "JR東日本 東京近郊路線図", url: "http://jasf.org/rosenzu/map_tokyo.png" },
      { id: 1, name: "東京メトロ 地下鉄路線図", url: "https://www.tokyometro.jp/library/svg_map/img/jp/all.png" },
      { id: 2, name: "メイク 東京広域路線図", url: "http://www.meik.jp/2rosenzu/jpg_640/tokyokoiki_a3.jpg" },
      { id: 3, name: "メイク 東京・横浜・千葉路線図", url: "http://www.meik.jp/2rosenzu/jpg_640/tkyo_yko_chba.jpg" }
    ];
  }

  render() {
    return React.createElement(
      "div",
      {},
      React.createElement(
        "select",
        { onChange: this.selectMap },
        this.maps.map(m => React.createElement(
          "option",
          { value: m.id },
          m.name
        ))
      ),
      React.createElement(
        "button",
        { onClick: this.throwDart },
        "なげる"
      ),
      React.createElement(
        "div",
        { id: "board" },
        React.createElement(
          "img",
          { src: this.maps[this.state.selectedMap].url }
        ),
        React.createElement(
          "div",
          { id: "dart" }
        )
      )
    );
  }

  selectMap(e) {
    this.setState({ selectedMap: e.target.value });
  }

  throwDart(e) {
    document.getElementById('dart').style.display = 'block';
    document.getElementById('dart').style.left = 960 * Math.random() + "px";
    document.getElementById('dart').style.top = 600 * Math.random() + "px";
  }
}

ReactDOM.render(React.createElement(DartsTravel, null), document.getElementById('darts-app'));
