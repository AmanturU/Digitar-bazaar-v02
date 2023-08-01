export const Regex = {
  Email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  Username: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{3,29}$/,
  Displayname: /^[A-Za-zА-Яа-яЁё\s][A-Za-zА-Яа-яЁё\s]{4,29}$/,
}