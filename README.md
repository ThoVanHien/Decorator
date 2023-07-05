# Decorator trong TS

## Một số syntax trong TS:

1. Kiểu dữ liệu của một dạng constructor function hoặc class:

   ```js
   // Cách 1
   type T = new (...args: any[]) => {
    name: string;
   };
   // Cách 2
   type T = { new (...args: any[]): { name: string } };

   // Cách 3
   function<T extends { new (...args: any[]): { name: string } } (param: T){
    return class extends param {
        super()
    } => đoạn này sẽ tạo ra một Class mới kế thừa từ Class cũ.
   }
   ```

2. Function Decorator: (dạng higher-order function);
   > @FactoryDecorator("metadata")
3. Decorator:
   > @Decorator
4. Các dạng Decorator :
   > ClassDecorator có param là constructor function của target.

- Thường là để custom từ người dùng:

  ```js

  ```
