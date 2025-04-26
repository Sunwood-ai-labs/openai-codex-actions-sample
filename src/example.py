def calculate_fibonacci(n):
    """n番目のフィボナッチ数を計算する
    
    Args:
        n (int): フィボナッチ数列の何番目かを指定
    
    Returns:
        int: n番目のフィボナッチ数
    
    Raises:
        ValueError: nが負の値の場合
    """
    if n < 0:
        raise ValueError("n must be non-negative")
    
    if n <= 1:
        return n
    
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    
    return b


def is_palindrome(text):
    """与えられた文字列が回文かどうかを判定する
    
    Args:
        text (str): 判定対象の文字列
    
    Returns:
        bool: 回文の場合True、そうでない場合False
    """
    # 大文字小文字を区別せず、スペースを無視する
    cleaned_text = ''.join(c.lower() for c in text if c.isalnum())
    return cleaned_text == cleaned_text[::-1]


class Stack:
    """スタックの実装"""
    
    def __init__(self):
        self.items = []
    
    def push(self, item):
        """スタックに要素を追加"""
        self.items.append(item)
    
    def pop(self):
        """スタックから要素を取り出す
        
        Returns:
            スタックの最上部の要素
        
        Raises:
            IndexError: スタックが空の場合
        """
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self.items.pop()
    
    def peek(self):
        """スタックの最上部の要素を確認（削除しない）
        
        Returns:
            スタックの最上部の要素
        
        Raises:
            IndexError: スタックが空の場合
        """
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self.items[-1]
    
    def is_empty(self):
        """スタックが空かどうかを確認"""
        return len(self.items) == 0
    
    def size(self):
        """スタックの要素数を返す"""
        return len(self.items)


if __name__ == "__main__":
    # デモ
    print(f"Fibonacci(10) = {calculate_fibonacci(10)}")
    print(f"Is 'A man a plan a canal Panama' palindrome? {is_palindrome('A man a plan a canal Panama')}")
    
    stack = Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    print(f"Stack size: {stack.size()}")
    print(f"Stack top: {stack.peek()}")
    print(f"Pop: {stack.pop()}")
    print(f"Stack size after pop: {stack.size()}")
