function getPb(panoId, lat, lng, heading) {
  // Generic pb string for street view. 
  // !1m7!1s<pano_id>!2m2!1d<lat>!2d<lng>!3f<heading>!4f0!5f0
  const pbStr = `!4v1!6m8!1m7!1s${panoId}!2m2!1d${lat}!2d${lng}!3f${heading}!4f0!5f0`;
  console.log(`https://www.google.com/maps/embed?pb=${pbStr}`);
}

getPb('AF1QipO3prPkYK7t0HEE8efcoTmRdma5JSg0RLler_yt', 49.7533816, 18.4929537, 42.66);
