FROM python:3.8-slim-buster

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV PATH="/scripts:${PATH}"

RUN pip install --upgrade pip
COPY ./requirements.txt /requirements.txt

# packages required for setting up WSGI
RUN apt-get update
RUN apt-get install -y --no-install-recommends gcc libc-dev python3-dev libpq-dev postgresql

RUN pip install -r /requirements.txt

RUN mkdir /app
COPY ./blog /app
WORKDIR /app
COPY ./scripts /scripts

RUN chmod +x /scripts/*

# folder to serve media files by nginx
RUN mkdir -p /vol/web/media
# folder to serve static files by nginx
RUN mkdir -p /vol/web/static

# always good to run our source code with a different user other than root user
RUN useradd user
RUN chown -R user:user /vol
# chmod 755 means full access to owner and read-access to everyone else
RUN chmod -R 755 /vol/web
RUN chown -R user:user /app
RUN chmod -R 755 /app
# switch to our user
USER user

EXPOSE 8000

CMD ["entrypoint.sh"]
