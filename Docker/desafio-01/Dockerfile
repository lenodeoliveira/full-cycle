##### Stage 1 #####

FROM golang:alpine as builder

RUN mkdir -p /app
WORKDIR /app

COPY . .

ENV CGO_ENABLED=0

RUN GOOS=linux go build ./hello.go

##### Stage 2 #####

FROM scratch

WORKDIR /app

COPY --from=builder /app .

CMD ["/app/hello"]