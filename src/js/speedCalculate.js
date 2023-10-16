function speedCalculator() {
  const textEntered = input.value;
  const words = textEntered.split(' ').filter(word => word !== '');
  const timeElapsed = (Date.now() - startTime) / 1000;
  const wordsPerSecond = wordCount / timeElapsed;
  const speed = wordsPerSecond.toFixed(2);
  speedDisplay.textContent = speed;
}