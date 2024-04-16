console.log("Service Worker Loaded...");

self.addEventListener('push', function(e) {
  const data = e.data.json();
  console.log("Push Recieved...");
  console.log(data);
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "https://media.licdn.com/dms/image/C4E0BAQHOvAV4btfboQ/company-logo_100_100/0/1677228204664/addispay_financial_technology_s_c_logo?e=1721260800&v=beta&t=fDz4-B-7VKBE-lGvaNKUxxLJyw-p6w-Ud7lO7IFH6lQ"
  });
});
