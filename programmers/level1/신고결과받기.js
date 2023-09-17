function solution(id_list, report, k) {
  const newRepo = [...new Set(report)];
  const out = [];
  const count = Array(id_list.length).fill(0);
  const mail = Array(id_list.length).fill(0);

  for (let r of newRepo) {
    let a = r.split(" ")[0];
    let b = r.split(" ")[1];
    let idxB = id_list.indexOf(b);
    count[idxB] += 1;

    if (count[idxB] >= k) {
      out.push(id_list[idxB]);
    }
  }

  newRepo.map((r, idx) => {
    let a = r.split(" ")[0];
    let b = r.split(" ")[1];

    if (out.indexOf(b) >= 0) {
      let idx = id_list.indexOf(a);
      mail[idx] += 1;
    }
  });

  return mail;
}
