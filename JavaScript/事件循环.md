# 事件循环

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Event_loop)

JS是单线程的

之所以称之为**事件循环**，是因为它经常按照类似如下的方式被实现：

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

`queue.waitForMessage()` 会同步地等待消息到达 (如果当前没有任何消息等待被处理)。

![](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Event_loop/the_javascript_runtime_environment_example.svg)

### 运行时概念

- **执行栈**，函数调用形成了由若干帧堆叠而成的栈

  ```js
  function foo(b) {
    const a = 10;
    return a + b + 11;
  }
  
  function bar(x) {
    const y = 3;
    return foo(x * y);
  }
  
  const baz = bar(7); // 将 42 赋值给 baz
  ```

  1. 当调用 `bar` 时，第一个帧被创建并压入栈中，帧中包含了 `bar` 的参数引用和局部变量。
  2. 当 `bar` 调用 `foo` 时，第二个帧被创建并被压入栈中，放在第一个帧之上，帧中包含 `foo` 的参数引用和局部变量。
  3. 当 `foo` 执行完毕然后返回时，第二个帧就被弹出栈（剩下 `bar` 函数的调用帧）。
  4. 当 `bar` 也执行完毕然后返回时，第一个帧也被弹出，栈就被清空了。

  注意参数和局部变量可能继续存在，因为它们在栈的外部存储——所以在嵌套函数的外部函数返回后，它们仍能被任意的[嵌套函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions#嵌套函数和闭包)访问。
  **同步代码会被压入执行栈**

- **堆**，对象被分配在堆中

- **消息队列（宏任务）**，JS运行时包含一个待处理消息的消息队列，每个消息都关联着一个用以处理这个消息的回调函数

  1. 在[事件循环](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Event_loop#事件循环)期间的某个时刻，运行时会开始处理最先进入队列的消息。被处理的消息会被移出队列，并作为输入参数来调用与之关联的函数。正如前面所提到的，调用一个函数总是会为其创造一个新的栈帧。
  2. 只有一个消息运行完毕后，才会去运行下一个消息
     缺点：一个消息时间过长，页面卡死，无法处理用户交互，例如点击或滚动。
     所以要缩短单个消息处理时间，过长的分成好几个消息



1. **同步代码**：首先，执行栈中的同步代码会依次执行，直到执行栈为空。
2. **异步事件**：当异步事件发生时（如一个网络请求完成），它的回调函数会被添加到任务队列中。
3. **宏任务（MacroTask）与微任务（MicroTask）**：
   - **宏任务**：包括整体代码script，setTimeout，setInterval，setImmediate，I/O，UI rendering，网络请求回调等。
   - **微任务**：包括process.nextTick（Node.js），Promise，MutationObserver等。
4. **执行顺序**：
   - 当执行栈为空时，事件循环会首先检查微任务队列。如果微任务队列中有任务，它们会依次被执行，直到微任务队列为空。
   - 然后，事件循环会检查宏任务队列，并执行一个宏任务（通常是任务队列中的第一个）。
   - 执行完一个宏任务后，再次检查微任务队列，重复上述过程。



### 添加消息

浏览器中，每当一个事件发生，并且有监听器绑定该事件时，一个消息就会被添加进消息队列。如果没有，此事件会丢失

- 用户交互产生消息，如用户点击。（如果有代码还在执行，监听操作会正常，监听器的回调函数会被阻塞）
- JS直接触发事件，不会产生消息，会等着当前栈执行完后，直接执行

### setTimeout

函数 [`setTimeout()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout) 接受的前两个参数：一个是待加入队列的消息，一个是时间值（可选，默认为 0）

- 如果队列中没有其他消息，且栈为空，在延迟事件过去之后，消息会被马上处理。
- 如果有其他消息，必须等其他消息处理完





