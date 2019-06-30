async function move(e) {
  // e.preventDefault();
  const position = this.state.position;
  var enemyPosition = this.state.map.enemy.map(item => {
    return {
      top: this.state.character.characterPositionInMap.top - item.position.top,
      left:
        this.state.character.characterPositionInMap.left - item.position.left
    };
  });
  var noEntry = this.state.map.noEntry.concat(enemyPosition);
  var noEntryOtherSide = false;

  switch (e.keyCode) {
    case 37:
      const noEntryLeft = noEntry.some(item => {
        return item.left === parseInt(position.left) + 50;
      });
      noEntryOtherSide = noEntry.some(item => {
        if (item.left === parseInt(position.left) + 50) {
          return item.top === parseInt(position.top);
        } else {
          return false;
        }
      });
      if (noEntryLeft && noEntryOtherSide) break;
      this.setState({
        position: {
          top: position.top,
          left: (parseInt(position.left) + 50).toString()
        }
      });
      break;
    case 38:
      const noEntryTop = noEntry.some(item => {
        return item.top === parseInt(position.top) + 50;
      });
      noEntryOtherSide = noEntry.some(item => {
        if (item.top === parseInt(position.top) + 50) {
          return item.left === parseInt(position.left);
        } else {
          return false;
        }
      });
      if (noEntryTop && noEntryOtherSide) break;
      this.setState({
        position: {
          top: (parseInt(position.top) + 50).toString(),
          left: position.left
        }
      });
      break;
    case 39:
      const noEntryRight = noEntry.some(item => {
        return item.left === parseInt(position.left) - 50;
      });
      noEntryOtherSide = noEntry.some(item => {
        if (item.left === parseInt(position.left) - 50) {
          return item.top === parseInt(position.top);
        } else {
          return false;
        }
      });
      if (noEntryRight && noEntryOtherSide) break;
      this.setState({
        position: {
          top: position.top,
          left: (parseInt(position.left) - 50).toString()
        }
      });
      break;
    case 40:
      const noEntryDown = noEntry.some(item => {
        return item.top === parseInt(position.top) - 50;
      });
      noEntryOtherSide = noEntry.some(item => {
        if (item.top === parseInt(position.top) - 50) {
          return item.left === parseInt(position.left);
        } else {
          return false;
        }
      });
      if (noEntryDown && noEntryOtherSide) break;
      this.setState({
        position: {
          top: (parseInt(position.top) - 50).toString(),
          left: position.left
        }
      });
      break;
    default:
      break;
  }
  this.setState({ character: { ...this.state.character, moving: true } });
}

export default move;
