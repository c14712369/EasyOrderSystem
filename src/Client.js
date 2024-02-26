let Client = (function () {

    let auth = '';
    const BasicAuth = 'M2ZPTnQxVjl5MzA9Ond6VUc5OXllTjVjPQ=='; //LocalHost

    const url = 'http://localhost:60394'; //LocalHost
    const DMZurl = 'http://localhost:60394';
    const verNo = '20240215v1';

    function GetVerNo() {
        return verNo;
    }

    function GetServerURL() {
        return DMZurl;
    }

    function getAuth() {
        auth = localStorage.b;
        if (auth) {
            sessionStorage.b = localStorage.b;
            sessionStorage.cid = localStorage.cid;
            sessionStorage.uid = localStorage.uid;
            sessionStorage.una = localStorage.una;
            sessionStorage.rno = localStorage.rno;
            sessionStorage.bid = localStorage.bid;
            sessionStorage.ual = localStorage.ual;

            localStorage.removeItem("b");
            localStorage.removeItem("cid");
            localStorage.removeItem("uid");
            localStorage.removeItem("una");
            localStorage.removeItem("rno");
            localStorage.removeItem("bid");
            localStorage.removeItem("ual");

        }
        else {
            auth = sessionStorage.b;
        }
        return (auth) ? {
            channel_ID: window.atob(sessionStorage.cid),
            user: window.atob(sessionStorage.uid),
            username: sessionStorage.una,
            registry_NO: window.atob(sessionStorage.rno),
            userAuthLevel: window.atob(sessionStorage.ual),
            branch_ID: window.atob(sessionStorage.bid),
            IsUrlSign: sessionStorage.UrlSign
        }
            : {};
    }

    function parseJSON(r) {
        if (r.status && r.status === 401) {
            return { status: 401 };
        } else {
            return r.json();
        }
    }

    //Login
    function getToken(tki, success, fail) {
        fetch(url + '/api/token', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(tki)
        })
            .then(parseJSON)
    }

    function getTokenSign(tki, success) {
        fetch(url + '/api/tokensign', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify(tki)
        })
            .then(parseJSON)
    }

    function GetData(wki, success, Apiname) {
        fetch(url + '/api/' + Apiname, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                Authorization: 'Bearer ' + auth
            },
            body: JSON.stringify(wki)
        })
            .then(parseJSON)
            .catch(onError);
    }


    return {
        GetServerURL, getAuth, getToken, getTokenSign, GetData, GetVerNo
    }

})();

export default Client;
