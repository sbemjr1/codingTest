n = int(input())
_count = 0

for i in range(n + 1) :
    for j in range(60) :
        for k in range(60) :
            # if str(i).count('3') or str(j).count('3') or str(k).count('3') :
            #     _count += 1
            if '3' in str(i) + str(j) + str(k) :
                _count += 1

print(_count)
