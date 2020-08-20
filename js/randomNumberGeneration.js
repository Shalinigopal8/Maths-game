window.getRandomNumber = function(low, high)
{
  window.r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
}
