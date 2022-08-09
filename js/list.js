const domain = "http://www.hongseos.shop"
// let domain = "http://localhost:8080"

const token = $.cookie("mytoken")

$(document).ready(function () {
    let splitLink = document.location.href.split("?")
    if(splitLink[1]) { //검색어 있음
        let queryLink = splitLink[1].split("=")
        searchListing(queryLink[1], "latest")
    } else {
        listing("latest");
    }
});

function listing(orderType) {
    $.ajax({
        type: "GET",
        url: `${domain}/post/all?orderType=${orderType}`,
        data: {},
        dataType : "json",
        beforeSend: function(xhr) {
                xhr.setRequestHeader("token", token);
        },
        success: function (response) {
            $("#post-card-box").empty();
            let posts = response["data"]
            for (let i = 0; i < response["count"]; i++) {
                makePost(posts[i]);
            }
        }
    });
}

function searchListing(query, orderType) {
    $.ajax({
        type: "GET",
        url: `${domain}/post/search?query=${query}&orderType=${orderType}`,
        data: {},
        dataType : "json",
        beforeSend: function(xhr) {
            xhr.setRequestHeader("token", token);
        },
        success: function (response) {
            $("#post-card-box").empty();
            $("#search-query-box").empty();
            let posts = response["data"]
            //검색어 보여주는 칸
            $("#search-query-box").append(
                `<h3 class="menu-container"><span id="search-result-text" style="color: red;">${decodeURI(query)}</span>의 검색 결과 입니다.</h3>`
            )
            for (let i = 0; i < response["count"]; i++) {
                makePost(posts[i]);
            }
        },
        error : function () {
            alert("로그인을 먼저 해주세요.")
            window.location.href = "/login.html"
        }
    })
}

function makePost(post) {
    let sold = post["sold"]
    if(sold == true) {
        let tempHtml =  `<article class="card">
                            <a href="/post.html?id=${post["postId"]}" class="crad-link">
                                <div class="card-img">
                                    <img src='${post["postImgs"][0]["imgUrl"]}' alt="title">
                                </div>
                                <div class="card-desc">
                                    <p class="card-title">${post["title"]}</p>
                                    <p class="card-sold">대여완료</p>
                                    <p class="card-address">${post["address"]}</p>
                                    <p class="card-like">관심 ${post["likeCount"]}</p>
                                </div>
                            </a>
                        </article>`
        $("#post-card-box").append(tempHtml)
    } else {
        let tempHtml =  `<article class="card">
                            <a href="/post.html?id=${post["postId"]}" class="crad-link">
                                <div class="card-img">
                                    <img src='${post["postImgs"][0]["imgUrl"]}' alt="title">
                                </div>
                                <div class="card-desc">
                                    <p class="card-title">${post["title"]}</p>
                                    <p class="card-price">${post["price"]}원</p>
                                    <p class="card-address">${post["address"]}</p>
                                    <p class="card-like">관심 ${post["likeCount"]}</p>
                                </div>
                            </a>
                        </article>`
        $("#post-card-box").append(tempHtml)
    }
}

function click_sort_btn(order_type) {
    let query = $("#search-result-text").text()
    if(query) {
        searchListing(query, order_type)
    }
    else {
        listing(order_type)
    }

    if (order_type == "latest") {
        $('#latest-tag').addClass("is-dark")
        $('#like-tag').removeClass("is-dark")
        $('#address-tag').removeClass("is-dark")
    } else {
        $('#like-tag').addClass("is-dark")
        $('#latest-tag').removeClass("is-dark")
        $('#address-tag').removeClass("is-dark")
    }
}
function posting() {
    if (!token) {
        alert("로그인이 필요한 서비스 입니다.")
        window.location.href ='/login.html'
  } else {
  window.location.href = '/posting.html'
  }
}