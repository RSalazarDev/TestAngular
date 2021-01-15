<%-- 
    Document   : procesarMedia
    Created on : 15-ene-2021, 21:10:17
    Author     : DAW-B
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>

        <% float numero1 = Float.parseFloat(request.getParameter("nota1"));%>
        <% float numero2 = Float.parseFloat(request.getParameter("nota2"));%>
        <% float numero3 = Float.parseFloat(request.getParameter("nota3"));%>
        <% float media = (numero1 + numero2 + numero3) / 3;%>
        <%if (media >= 5) {
        %><h1 style="color:green;">Nota media: <%=media%></h1><%
        } else {
        %><h1 style="color:red;">Nota media: <%=media%></h1><%
    }%>

        <h1><%=request.getParameter("nombre")%></h1>
    </body>
</html>
