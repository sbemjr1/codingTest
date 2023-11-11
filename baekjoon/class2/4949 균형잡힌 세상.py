while True :
    S = input()
    _stack=[]

    if S == "." :
        break

    for i in S :
        if i=="(" or i == "[" :
            _stack.append(i)
        elif i ==")" :
            if len(_stack) != 0 and _stack[-1] =="(" :
                _stack.pop()
            else :
                _stack.append(")")
                break
        elif i =="]" :
            if len(_stack) != 0 and _stack[-1] =="[" :
                _stack.pop()
            else :
                _stack.append("]")
                break
    
    if len(_stack)==0 :
        print('yes')
    else :
        print("no")
        