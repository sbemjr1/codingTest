function solution(emergency) {
    let answer = [];
    let newEmer = [...emergency].sort((a,b)=b-a);
    for(let i=0;inewEmer.length; i++){
        answer.push(newEmer.indexOf(emergency[i])+1);
    }
    return answer;
}