//function compose(f,g) {
  // Compose the two functions here!
  const compose=(...fns) => (...x) => fns.reduceRight((g,f) => f(g(...x)));
//}