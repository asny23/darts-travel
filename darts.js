class DartsTravel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedMap: 0 };
    this.selectMap = this.selectMap.bind(this);
    this.throwDart = this.throwDart.bind(this);
    this.maps = [
      { id: 0, name: "JR東日本 東京近郊路線図（車内掲出版）", url: "https://i.imgur.com/osrDFxe.png" },
      { id: 1, name: "JR東日本 東京近郊エリア拡大図", url: "https://i.imgur.com/unU08wb.png" },
      { id: 2, name: "JR東日本 関東・甲信越エリア", url: "https://i.imgur.com/HxCwhCP.png" },
      { id: 3, name: "東京メトロ 地下鉄路線図", url: "https://www.tokyometro.jp/library/svg_map/img/jp/all.png" },
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
