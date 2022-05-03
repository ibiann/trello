Hooks

useState

khai báo local state trong Function Component
state thay đổi thì component sẽ re-render

useEffect() 1 callback 2 dependecies
những thao tác, event bên ngoài component của chúng ta như việc thao tác với DOM, call APIs, setTimeout, setInterval,...

componentDidMount, componentDidUpdate, and componentWillUnmount

Dependencies là một đối số bên trong useEffect
không cung cấp
thực thi một lần duy nhất sau khi thành phần đó render lần đầu tiên []
render tiếp theo, nó sẽ kiểm tra giá trị của props, state mới với giá trị props, state trước đó (prop, state)

useRef()
cố định dữ liệu giữa các lần re-render, truy xuất giá trị đó qua thuộc tính current

useCallback()
ngăn hàm của bị tạo lại và thay đổi trên mỗi lần render, trả lại 1 function, tạo lại khi có dependecies thay đổi
https://kysumattien.com/the-ultimate-guide-about-useMemo-and-useCallback

truy xuất đến DOM node (DOM Element để query tới một đối tượng HTML kết quả trả về một object)

setTimeout()
hàm của mình thực thi bao nhiêu mili giây kể từ khi gọi

setInterval()
sử dụng để thiết lập độ trễ cho các hàm sẽ được thực hiện lặp lại như là hiệu ứng.

async/await viết code bất đồng bộ, xử lý error
https://topdev.vn/blog/6-ly-do-asyncawait-cua-javascript-danh-bai-promises/

spread operator
copy mảng
