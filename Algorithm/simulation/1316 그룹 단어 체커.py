import sys
input = sys.stdin.readline

n = int(input())
result = 0
for _ in range(n) :
    words = input().rstrip()
    _stack = [words[0]]
    for i in range(1, len(words)) :
        if words[i] != words[i - 1] and words[i] not in _stack :
            _stack.append(words[i])
        elif words[i] != words[i - 1] and words[i] in _stack :
            break
    else :
        result += 1
            

print(result)